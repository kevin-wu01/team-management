from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import User
from .serializers import UserSerializer
import pyrebase
import json

# Create your views here.
config = {
  "apiKey": "AIzaSyA0DhUY7mK1QGJqBEyTQ9vhGwl2zzjYxeE",
  "authDomain": "team-management-d5115.firebaseapp.com",
  "databaseURL": "https://team-management-d5115-default-rtdb.firebaseio.com",
  "projectId": "team-management-d5115",
  "storageBucket": "team-management-d5115.appspot.com",
  "messagingSenderId": "481442539657",
  "appId": "1:481442539657:web:44d6174b4eeda8f906fe58",
  "measurementId": "G-D35B0RL8Z4"
}

firebase=pyrebase.initialize_app(config)
authe = firebase.auth()
database=firebase.database()

class UserApiView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def getUsersListFromDict(self, userDict):
        users = []

        for key, value in userDict.items():
            value["id"] = key
            users.append(value)
        
        return users
    

    def get(self, request):
        usersDict = database.child("Users").get().val()
        usersList = self.getUsersListFromDict(usersDict)
        serializer = UserSerializer(usersList, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = {
            'firstName': request.data.get('firstName'),
            'lastName': request.data.get('lastName'),
            'phone': request.data.get('phone'),
            'email': request.data.get('email'),
            'role': request.data.get('role'),
        }

#        newUser = User.objects.create(**data)
 #       print(newUser._meta.fields)
        serializer = UserSerializer(data=data)

        if serializer.is_valid():
            serializer.save()

            id = serializer.data['id']
            database.child("Users").child(id).set(serializer.data)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailApiView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get_DBUser(self, user_id):
        user = database.child("Users").order_by_key().equal_to(user_id).get().val()
        if type(user) == list: return None
        return user.popitem()[1]

    def get_user(self, user_id):
        try:
            return User.objects.get(id=user_id)
        except User.DoesNotExist:
            return None

    def get(self, request, user_id):
        user_instance = self.get_DBUser(user_id)

        if not user_instance:
            return Response(
                { "res": "User with specified id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        serializer = UserSerializer(user_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, user_id):
        user_data = self.get_DBUser(user_id)
        user_instance = User.objects.get(id=user_id)

        if not user_instance:
            return Response(
                { "res": "User with specified id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        data = {
            "firstName": request.data.get("firstName"),
            "lastName": request.data.get("lastName"),
            "phone": request.data.get("phone"),
            "email": request.data.get("email"),
            "role": request.data.get("role")
        }
        

        database.child("Users").child(user_id).update(data)
        serializer = UserSerializer(instance=user_instance, data=data, partial=True)

        if serializer.is_valid():
            print(serializer)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id):
        user_instance = self.get_DBUser(user_id)

        if not user_instance:
            return Response(
                { "res": "User with specified id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        database.child("Users").child(user_id).remove()
        User.objects.get(id=user_id).delete()

        return Response(status=status.HTTP_200_OK)