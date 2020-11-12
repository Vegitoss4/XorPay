import { ChangeDetectorRef, Component, OnInit, AfterViewInit } from '@angular/core';
import { stringify } from 'querystring';
import {DataService} from '../services/data.service'


@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.less']
})
export class MappingComponent implements OnInit {
  divLen: any = [1,2,3,4,5,6,7,8,9,10];
  MappedData: any;
  selectedTargetArray:Array<any> = []
  initialValue: any;
  
  constructor(private dataProvider: DataService,private cdr: ChangeDetectorRef) { 
    // this.MappedData= this.dataProvider.getMappedData();
  //  this.MappedData = [
  //   {SourceName: "TAG_SEQID", TargetName: "TwnNm"},
  //   {SourceName: "TAG_NAME", TargetName: "Strd"}
  //  ]
 
   
  }
  ngAfterViewInit() {
    var intialKeys = ["InitialVal"]
    let valbol = this.mockDataSource.some(e => e.hasOwnProperty('InitialVal'));
    if(valbol == true){
      this.MappedData = [];
       this.preloadData();
  
     }
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
  }
  keyword = 'tag_name';
 
 
 public mockDataSource = [
 {
   "name": "TAG_SEQID",
   "type": "NUMBER",
   "InitialVal":"RmtInf"
 },
 {
   "name": "TAG_NAME",
   "type": "VARCHAR2"
 },
 {
   "name": "TAG_INFO",
   "type": "VARCHAR2"
 },
 {
   "name": "XPATH",
   "type": "VARCHAR2",
   "InitialVal":"Strd"
 },
 {
   "name": "MAX_LENGTH",
   "type": "NUMBER"
 },
 {
   "name": "CREATED_DATE",
   "type": "TIMESTAMP"
 },
 {
   "name": "CREATED_BY",
   "type": "VARCHAR2"
 },
 {
   "name": "UPDATED_DATE",
   "type": "TIMESTAMP"
 },
 {
   "name": "UPDATED_BY",
   "type": "VARCHAR2"
 }]
  public mockDataTarget = [
    {
      "tag_seqid": 132,
      tag_name: "TwnNm",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/IntrmyAgt1\/FinInstnId\/PstlAdr\/TwnNm",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 54,
      tag_name: "Strd",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 55,
      tag_name: "RfrdDocInf",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocInf",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 52,
      tag_name: "RmtInf",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 53,
      tag_name: "Ustrd",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Ustrd",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 56,
      tag_name: "Tp",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocInf\/Tp",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 57,
      tag_name: "CdOrPrtry",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocInf\/Tp\/CdOrPrtry",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 58,
      tag_name: "Cd",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocInf\/Tp\/CdOrPrtry\/Cd",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 59,
      tag_name: "Nb",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocInf\/Nb",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 60,
      tag_name: "RltdDt",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocInf\/RltdDt",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 61,
      tag_name: "RfrdDocAmt",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocAmt",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 62,
      tag_name: "DuePyblAmt",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocAmt\/DuePyblAmt",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 63,
      tag_name: "DscntApldAmt",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocAmt\/DscntApldAmt",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 64,
      tag_name: "CdtNoteAmt",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocAmt\/CdtNoteAmt",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 65,
      tag_name: "TaxAmt",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocAmt\/TaxAmt",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 66,
      tag_name: "RmtdAmt",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/RfrdDocAmt\/RmtdAmt",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 67,
      tag_name: "CdtrRefInf",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/CdtrRefInf",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 68,
      tag_name: "Tp",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/CdtrRefInf\/Tp",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 69,
      tag_name: "CdOrPrtry",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/CdtrRefInf\/Tp\/CdOrPrtry",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 70,
      tag_name: "Cd",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/CdtrRefInf\/Tp\/CdOrPrtry\/Cd",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 71,
      tag_name: "Ref",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/CdtrRefInf\/Ref",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 72,
      tag_name: "AddtlRmtInf",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/RmtInf\/Strd\/AddtlRmtInf",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 73,
      tag_name: "Id",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/Dbtr\/Id",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 74,
      tag_name: "OrgId",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/Dbtr\/Id\/OrgId",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 75,
      tag_name: "Othr",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/Dbtr\/Id\/OrgId\/Othr",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 76,
      tag_name: "Id",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/Dbtr\/Id\/OrgId\/Othr\/Id",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    },
    {
      "tag_seqid": 77,
      tag_name: "Tp",
      "xpath": "\/Document\/CstmrCdtTrfInitn\/PmtInf\/CdtTrfTxInf\/CdtrAcct\/Tp",
      "created_date": "18-09-20 03:36:36.000000000 AM",
      "created_by": "ERP TEAM",
      "updated_date": "18-09-20 03:36:36.000000000 AM",
      "updated_by": "ERP TEAM"
    }
  ]

  public preloadData()
  {
      // Use map to get a simple array of "val" values. 

      let yFilter = this.mockDataTarget.map(itemY => { return itemY.tag_name; });

      // Use filter and "not" includes to filter the full dataset by the filter dataset's val.
      let filteredX = this.mockDataSource.filter(itemX => yFilter.includes(itemX.InitialVal));  
     
        for (var j = 0; j < filteredX.length; j++){

          this.MappedData.push({SourceName:filteredX[j].name,TargetName:filteredX[j].InitialVal});
          
          }
          this.dataProvider.setMappedData(this.MappedData);
          console.log(this.MappedData);
          
  }

  selectEvent(source,target) 
  {
    // do something with selected item
    let SourceName = source;
    let TargetName = target.tag_name;
    let dataD = this.dataProvider.getMappedData();
    if (dataD.length == 0)
    {
      this.selectedTargetArray = [];
    }
    // if(("InitialVal" in this.mockDataSource) == true)
    // {

    // }
    // else
    // {

    // }
    if(this.MappedData.length == 0)
    {
      this.selectedTargetArray = [];
    }
    this.selectedTargetArray.push({SourceName:SourceName,TargetName:TargetName});
    
    this.selectedTargetArray = [...new Set(this.selectedTargetArray)];
    this.selectedTargetArray = this.getUniqueListBy(this.selectedTargetArray, 'SourceName');
    this.dataProvider.setMappedData(this.selectedTargetArray);
    this.MappedData = [];
    this.MappedData = this.dataProvider.getMappedData();
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
  onClear(source){
    let svalue = source;
    this.selectedTargetArray = this.dataProvider.getMappedData();
    this.dataProvider.setMappedData(this.selectedTargetArray.filter(item => item.SourceName !== svalue));
    this.MappedData = [];
    this.MappedData = this.dataProvider.getMappedData();
  }
  public getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}
public ClearAll() 
{
// this.mockDataSource = this.mockDataSource.map(function(item) { 
//   delete item.InitialVal; 
//   return item; 
// });

this.selectedTargetArray = null;
this.MappedData = [];
this.dataProvider.clearMappedData();

}
}
