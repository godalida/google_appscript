function myFunction() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getActiveSheet();
  var c=s.getActiveCell();
  var fldr=DriveApp.getFolderById("1V4Rf7_JU8gQt25PZ2Ix3miphQUmTVjxm");
  var files=fldr.getFiles();
  var names=[],f,str;
  while (files.hasNext()) {
    f=files.next();
    str='=hyperlink("' + f.getUrl() + '","' + f.getName() + '")';
    names.push([str]);
  }
  s.getRange(c.getRow(),c.getColumn(),names.length).setFormulas(names);
}