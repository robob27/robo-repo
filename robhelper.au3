AutoItSetOption("WinTitleMatchMode",3)

HotKeyset("#n","RunNotepad")

Func RunNotepad()
	If ProcessExists("notepad++.exe") = False then
		Run("C:/Program Files (x86)/Notepad++/notepad++.exe")
	Else
		WinActivate("[REGEXPTITLE:Notepad++]")
	EndIf
EndFunc

While 1
	Sleep(1)
Wend