# setting working directory

#importing all libraries for modelling
import random
import os
os.chdir("D:\Anamika\F\Downloads")
import pandas as pd
import seaborn as sns
import xgboost as xgb
from sklearn.model_selection import train_test_split
from matplotlib import pyplot
import matplotlib.pyplot as plt
import matplotlib.pylab as plt
from xgboost import XGBClassifier
from xgboost import plot_tree
from matplotlib.pylab import rcParams
from sklearn.metrics import roc_curve ,auc,recall_score,precision_score
from sklearn.metrics import accuracy_score, make_scorer
from sklearn.model_selection import KFold, GridSearchCV
from numpy import sqrt ,argmax
import seaborn as sns
import pickle
import warnings
warnings.filterwarnings('ignore')


#set seed to have consistent values for all iterations
random.seed(10)
df = pd.read_csv(r"D:\Anamika\F\Semester 7\MDD\parkinsons.csv")
corr = df.corr()
corr.style.background_gradient(cmap='coolwarm')
df.corr(method ='pearson') 
df.to_csv('corr.csv')
df_1 =df[['MDVP:Fhi(Hz)','MDVP:Flo(Hz)','MDVP:Jitter(%)','NHR','DFA','spread1','spread2','D2','PPE','status']]
y= df_1.status
x=df_1.drop(['status'],axis=1)
x_train,x_test,y_train,y_test = train_test_split(x,y,test_size =0.3,stratify=y)
model = XGBClassifier()
print(model)
x_train = x_train.values
y_train = y_train.values
model.fit(x_train, y_train)

if not os.path.isfile("models.pkl"):
    with open("models.pkl",'wb') as file:
        pickle.dump(model, file)
#pickle.dump(model,open('models.pkl','wb'))
