# # -*- coding: utf-8 -*-
# """Popularity_based_Recom_sys.ipynb

# Automatically generated by Colaboratory.

# Original file is located at
#     https://colab.research.google.com/drive/1nTDvoTJYULQrKjf8NOxwORVBFRqrqcHG
# """
import sys
import numpy as np
import json
import pandas as pd
df=pd.read_csv("./Mentor.csv")
# print(df)
# # print(sys.argv[1])
# # df[:5]

dom1=[]
dom2=[]
dom3=[]
all_dom=[]
# print((df["Domain"]))
import re
for i in df["Domain"]:
  # print(re.sub(["\d[]"],"",str(i)))
  # print(str(i).replace("[","").replace("]","").replace(",","").replace("'",""))
  regex = re.compile('[^a-zA-Z|" "]')
#First parameter is the replacement, second parameter is your input strin
  j=regex.sub('', i)
  dom1.append(j.split()[0])
  dom2.append(j.split()[1])
  dom3.append(j.split()[2])
  # all_dom.append(j.split()[0])
  # all_dom.append(j.split()[1])
  # all_dom.append(j.split()[2])

df["Domain1"]=dom1
df["Domain2"]=dom2
df["Domain3"]=dom3

# whole_dom=np.unique(all_dom)
# print(len(whole_dom),len(all_dom))
# uniq_dom =zip(uniq_dom1,uniq_dom2,uniq_dom3)
# dom=pd.DataFrame({"Domain":dom})


ML_li={"ai","artificialintelligence","businessanalysis","businessintelligence","dataanalysis","dataanalyst",
       "dataengineering","datascience","datascientist","datavisualisation","datavisualization","deeplearning","machinelearningengineer"
       ,"naturallanguageprocessing","neuralnetworks","nlp","programminginpython","python","rubyonrails","robotics",
       "rails","r","ruby","robotics","xgboost","aiethics","flask","go","golang","hadoop","opencv","programminginpython"}
web_li={"api","web","angular","aspnetcore","backend","blockchain","html"
        "bootstrapping","css","django","erlang","frontend","fullstackdevelopment","frontenddevelopment","javascript","mysql","nodejs","node",
        "nextjs","net","php","redux","reactnative","reactjs","sql","webdesign","webdevelopment","vuejs","web","typescript"}
# new_egde_li={"blockchain","go"}
startup_li={"ycombinator","freelancing","startup","startups"}
contain_li={"blogging","contentdesign","contentmarketing","cvwriting","figma","platform","pitchreview"}
software_li={"abtesting","agile","agileproductmanagement","android","bbsoftwareasaservice","junit","debugging","applicationsecurity","cleancode"
             ,"pentest","penetrationtesting","projectmanagement","programmanagement","professionalskills","saas",
              'softwarearchitecture' ,'softwaredeveloper', 'softwaredevelopment','softwaredevelopmentprocess' ,'softwareengineer', 'softwareengineering',
             'softwareengineeringtoproductmanagement' ,'softwareproductdevelopment'
             }
life_li={"career","careercoach","careercoaching","careercounseling","careerdevelopment","careergrowth","careerpivoting","careerprogression","coaching","control",
         "creativethinking","leadingteams","leadershipcoaching","personalfinance","platform"}
project_li={"agileproductmanagement","agile","figma","platform","projectmanagement",}
cloud_li={"adobe","ansible","apachespark","aspnetcore","aws","azure","cloud","cloudcomputing","cybersecurity","data","database",
          'developscoaches' ,'devops',"distributedsystems","gcp","kubernetes"}
bigdata_li={"data", 'data', 'dataanalysis' ,'dataanalyst' ,'database' ,'dataengineering', "datascience" ,'datascientist' ,'datastrategy',"hadoop","prometheus",
            "redis","distributedsystems","sql","mysql",""}
marketing_li={"advertising","affiliatemarketing","bbmarketing","bbsales",
              "branding","businesscasewriting","consumerpm","contentmarketing","customerexperience","customerobsession","customersuccess","digitalmarketing" 
              ,"digitalmarketingstrategy","discovery","ecommerce","emailmarketing","facebookads","googleads","gotomarket",
              'marketing', 'marketingautomation', 'marketingstrategy', 'marketplace','marketresearch' ,'media' ,"onlinemarketing","observability",
              "organicandpaidsocialmediastrategy","paidads","salesforce","sales","saasmarketing","saas","socialmedia","socialengineering","strategicmarketing",
              
              }
product_li={"product", "productdesign",'productdevelopment', 'productdevelopmentlifecycle', 'productdiscover','productivity', 'productmanagement',
            'productmanager', 'productmarketfit','productmarketing', 'productownership', 'productroadmap', 'productsecurity','productstrategy',"socialengineering",
            "socialmedia","strategy","strategicmarketing","technologymanagement"}
bussiness_li={"advertising","affiliatemarketing","analytics","apollo","architecture","blueprism","branding","business","businessanalysis","businesscasewriting"
              "businessconsulting","businessdevelopment","businessintelligence","businessmodel","businessmodeling","businessmodels","businessstrategy",
              "ecommerce","entrepreneur","entrepreneurship","entrepreneurshp","faang","fintech","finance","financialservices","fundraising","gotomarket"
              ,"growth","growthhacking","growthstrategy","management","leadingteams","leadershipcoaching","mvp","product", "productdesign",
              'productdevelopment', 'productdevelopmentlifecycle', 'productdiscover','productivity', 'productmanagement','productmanager',
              'productmarketfit','productmarketing', 'productownership', 'productroadmap', 'productsecurity','productstrategy',"riskmanagement"
              ,"technology","teambuilding","technologymanagement"
              }
design_li={"design","designeducation","designleadership", 'designresearch' ,'designsprint' ,'designsprints' ,'designstrategy',"designthinking","designsystems",
           "graphicdesign","graphql","interactiondesign","visualdesign","uxwriting","uxcareergrowth","uxdesign","uxmentor","uxstrategy","uxresearch","ux"
           ,"uiux","uidesign"}
cs_li={"algorithms","architecture","c","cleancode","codereview","coding","computerscience","computervision","datastructuresandalgorithms","debugging","engineering"
      ,"engineeringleadership","engineeringmanager","git","linux","java","interviews","interviewpreparation","interviewprep","interview"}
app_dev_li={"apex","api","appdevelopment","applicationsecurity","cleancode","dart","debugging","dockerdropshipping","docker" ,
            "firebase","flutter","android","ios","junit","kotlin","mobiledeveloper","programmanagement","projectmanagement"}
eng_li={"engineering","engineeringleadership","engineeringmanagement","engineeringmanager","enterprisearchitecture","entrepreneur","entrepreneurship"
,"entrepreneurshp","faang","informationsecurity","interviews","interviewpreparation","interviewprep","interview","phd","professionalskills",
"sitereliabilityengineer"}
game_li={"gamedevelopment","c","algorithms","flutter","android","firebase","debugging","ios","swift","unity"}




dom_dic={'1':ML_li,'2':web_li,'3':startup_li,'4':contain_li,'5':software_li, '6':life_li, '7':project_li,
         '8':cloud_li,'9':bigdata_li, '10':marketing_li ,'11':product_li,'12':bussiness_li, '13':design_li,'14':cs_li,'15':app_dev_li,
         '16':eng_li,'17':game_li}
# print(len(dom_dic))


def indus(dom):
  # print(dom)
  dom_indus=[]
  for i,j in dom_dic.items():
    for val in j:
      if(dom==val):
        dom_indus.append(f"I{i}")

    # if(dom==j):
    #   dom_indus.append(f"I{i}")
  # print(dom_indus)
  return dom_indus

# indus("javascript")

def Recommand(dom):
  drop_list={"Industry","Domain","rev"}
  drop_df=df.drop(columns=drop_list)
  
  li=[0 for i in range(len(dom_dic))]

  for i in range(len(dom_dic)):
    # for j in range(len())
    drop_df[f"I{i+1}"]=0
  
  # print(drop_df[:5])
  for i in range(drop_df.shape[0]):
    # print(d)
    d1=drop_df.iloc[i]["Domain1"]
    d2=drop_df.iloc[i]["Domain2"]
    d3=drop_df.iloc[i]["Domain3"]
    l1=indus(d1)
    # print('l2')
    l2=indus(d2)
    # print('l1')
    l3=indus(d3)
    
    for v in l1:
      x=drop_df.iloc[i][v]
      drop_df.at[i,v]=x+1
      # print(drop_df.iloc[i][v],i,v)
    for v in l2:
      x=drop_df.iloc[i][v]
      drop_df.at[i,v]=x+1
      # print(drop_df.iloc[i][v],v)
      
    for v in l3:
      x=drop_df.iloc[i][v]
      drop_df.at[i,v]=x+1
      # print(drop_df.iloc[i][v],i,v)
  drop_list={"Domain3","Domain1","Domain2","Followers","Rating"}
  new_df=drop_df.drop(columns=drop_list)
  # print(new_df)
  from sklearn.metrics.pairwise import cosine_similarity
  col=new_df.columns[1:]
  # print(col)
  # y=pd.pivot_table(data=new_df,columns=col)
  y=new_df.drop(columns={"Name"}).to_numpy()
  # print(y)
  similarity_scores =cosine_similarity(y)
  # print(similarity_scores.shape)
  name=new_df["Name"].to_numpy().reshape(similarity_scores.shape[0],1)
  ans=np.concatenate((name,similarity_scores),axis=1)
  
  # print(ans.shape)
  # print(ans[1][0])
  
  # sort_df=df[(df["Followers"]>10) & (df["Rating"]>4.6)]
  # print(sort_df)
  # print(similarity_scores[:2])
  # print(new_df)
  cl=indus(dom)
  
  if len(cl)==0:
    cl.append('I1')
  # print(cl[0])

  for i in cl:
    sort_df=drop_df.sort_values(by=[cl[0]],ascending=False)
    # print(sort_df1)
    index=sort_df.index[0]
  # print(index)
    rec_index=sorted(list(enumerate(similarity_scores[index])),key=lambda x:x[1],reverse=True)[1:200]
    # print(rec_index)
  rec_index=np.array(rec_index)
  rec_df=pd.DataFrame(rec_index,columns=["Index","val"])
  # print(rec_df["Index"])
  df["Index"]=df.index
  # print(df.index)
  merge_df=rec_df.merge(df,on="Index")
  drop_df=merge_df.drop(columns={"Index","Industry","val"})
  # print(drop_df)
  dom1=[]
  dom2=[]
  dom3=[]
  # all_dom=[]
# print((df["Domain"]))
  import re 
  for i in drop_df["Domain"]:
  # print(re.sub(["\d[]"],"",str(i)))
  # print(str(i).replace("[","").replace("]","").replace(",","").replace("'",""))
    regex = re.compile('[^a-zA-Z|" "]')
#First parameter is the replacement, second parameter is your input strin
    j=regex.sub('', i)
    dom1.append(j.split()[0])
    dom2.append(j.split()[1])
    dom3.append(j.split()[2])

  drop_df["Domain1"]=dom1 
  drop_df["Domain2"]=dom2
  drop_df["Domain3"]=dom3

  end_df=drop_df.drop(columns={"Domain"}).drop_duplicates()

  # print(end_df)
  # end_df.("/content/drive/MyDrive/College_stuff/recommendation.csv")
  return end_df.to_json(orient="split") 

v=Recommand(sys.argv[1])
print(v)
# # "javascript"
# # ans=json.dumps("./recommendation.json")
# # csv



