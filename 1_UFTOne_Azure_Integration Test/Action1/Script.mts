SystemUtil.Run "C:\Program Files\Mozilla Firefox\firefox.exe","","","",3
AIUtil.SetContext Browser("creationtime:=0")
Browser("CreationTime:=0").Navigate "https://advantageonlineshopping.com/#/"
wait(2)
'AIUtil.FindText("DEMO").CheckExists True 
'Browser("CreationTime:=0").Close

'a = 5
'b = 10
'c = a + b
'If c = 15 Then
'	Reporter.ReportEvent micPass, "Verify Sum", "Sum of a and b is : " &c
'Else
'	Reporter.ReportEvent micFail, "Verify Sum", "Sum of a and b is : " &c
'End If
'
