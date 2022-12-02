# RPS-Odin  
Odin Project: Rock Paper Scissors  
  
V1:\
-Choice is not case sensitive.\
-Invalid choice does not use up your try\
-Cancel does not produce error\
-Formula for generating random integer between two numbers is immensely useful:\
        getRandom(min, max) {\
            return Math.floor(Math.random() * (max - min + 1) + min);\
        }\

 \
V2:\
-Revisited version\
-Old five-round game still included as comment\
-Additional features not mentioned in assignment:\
    -Green background on win message, red on lose\
    -Disable buttons once winner has been declared\
-Note to self: Commit more often.