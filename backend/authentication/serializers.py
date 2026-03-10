class RegisterSerializer:
    class Meta:
        model = User
        fields = ('username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

class MyTokenObtainPairSerializer:
    class Meta:
        model = User
        fields = ('username', 'password')

