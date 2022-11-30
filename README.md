# RPS-Odin  
Odin Project: Rock Paper Scissors  
  
V1: Pretty happy with result.\
-Choice is not case sensitive.\  
-Invalid choice does not use up your try\  
-Cancel does not produce error\
-Formula for generating random integer between two numbers is immensely useful:\  
        getRandom(min, max) {\  
            return Math.floor(Math.random() * (max - min + 1) + min);\  
        }\  
