from fastapi import FastAPI, Path, Query, HTTPException, status
from typing import Optional
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()

current_date = datetime.now()
date = current_date.strftime('%m-%d-%Y')

class HabitsPlus(BaseModel):
  habito1: Optional[str] = None
  habito2: Optional[str] = None
  habito3: Optional[str] = None

class HabitsMinus(BaseModel):
  habito1: Optional[str] = None
  habito2: Optional[str] = None
  habito3: Optional[str] = None

class EmotionLog(BaseModel):
  dia: Optional[str]
  alegria: Optional[int] = None
  enojo: Optional[int] = None
  tristeza: Optional[int] = None
  verguenza: Optional[int] = None
  culpa: Optional[int] = None
  frustracion: Optional[int] = None
  ansiedad: Optional[int] = None
  sorpresa: Optional[int] = None
  otra: Optional[str] = None
  comentario: Optional[str] = None
  habitos_aumentar: Optional[HabitsPlus] = None
  habitos_disminuir: Optional[HabitsMinus] = None

class LogByDay(BaseModel):
  date: Optional[EmotionLog] = None

class User(BaseModel):
  name: str
  email: str
  edad: Optional[int] = None
  emotion_log: Optional[LogByDay] = None

class UpdateUser(BaseModel):
  name: Optional[str] = None
  email: Optional[str] = None
  edad: Optional[int] = None
  emotion_log: Optional[LogByDay] = None

# TODO indexing with email, so we can store user info directly linked to the email of Gcalendar
users = {
  1: {
    "name": "Agustina",
    "email": "agustinapascali@gmail.com",
    "edad": 29,
    "emotion_log": {
      "03-13-23": {
        "feliz": 1,
        "no feliz": 0,
      },
      "03-14-23": {
        "feliz": 1,
        "no feliz": 0,
      },
      "03-15-23": {
        "feliz": 1,
        "no feliz": 0,
      },}
  },
  2: {
    "name": "Sebastian",
    "email": "sebastian.lezama@gmail.com",
    "edad": 38,
    "emotion_log": {
      "03-13-23": {
        "feliz": 13,
        "no feliz": 0,
      },
      "03-14-23": {
        "feliz": 14,
        "no feliz": 0,
      },
      "03-15-23": {
        "feliz": 15,
        "no feliz": 0,
      },
    }
  }
}

@app.get("/users/{user_id}")
def get_user(user_id: int):
  return users[user_id]

@app.get("/users")
def get_users():
  return users

@app.get("/log")
def get_log(*,name: Optional[str] = None, emotion_log: Optional[str]):
  for user_id in users:
    if users[user_id].name == name:
      for log in users[user_id]["emotion_log"]:
        if log == emotion_log:
          return users[user_id]["emotion_log"][emotion_log]
  raise HTTPException(status_code=404, detail="User does not exist")

@app.post("/new-user/{user_id}")
def new_user(user_id: int, user: User):
  if user_id in users:
    raise HTTPException(status_code=404, detail="User Already exists")
  users[user_id] = user
  return users[user_id]

@app.put("/edit-user/{user_id}")
def edit_user(user_id: int, user: UpdateUser):
  if user_id not in users:
    raise HTTPException(status_code=404, detail="User does not exist")
  
  for i in user:
    if user[i] != None:
      users[user_id][i] = user[i]
  return users[user_id]
    

@app.delete("delete-user")
def delete_item(user_id: str = Query(..., description="The email of the user to delete")):
  if user_id not in users:
    raise HTTPException(status_code=404, detail="User does not exist")
  del users[user_id]
