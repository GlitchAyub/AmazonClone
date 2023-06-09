import 'package:amazon_clone/model/user.dart';
import 'package:flutter/material.dart';

class UserProvider extends ChangeNotifier {
  User _user = User(
    id: '',
    email: '',
    password: '',
    name: '',
    address: '',
    type: '',
    token: '',
  );
  User get user => _user;
  void setUser(String user) {
    _user = User.fromJson(user);
    notifyListeners(); 
  }
}
