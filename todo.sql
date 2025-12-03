-- שימוש במסד הנתונים של Clever Cloud
USE bmlvjbqgu6r8zm8267yf;

-- יצירת טבלת Items
CREATE TABLE Items (
    Id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(100),
    IsComplete TINYINT(1) DEFAULT 0,
    PRIMARY KEY (Id)
);

-- הוספת כמה נתונים לדוגמה
INSERT INTO Items (Name, IsComplete) VALUES 
('לקנות חלב', 0),
('להשלים פרויקט', 0),
('להתקשר לאמא', 1);
