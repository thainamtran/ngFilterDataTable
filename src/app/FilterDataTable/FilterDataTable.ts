import { Component, Input, OnInit, Output, EventEmitter, Renderer } from "@angular/core";
import { MatTableDataSource } from '@angular/material';


@Component({
    selector: "filter-data-table",
    templateUrl: "./FilterDataTable.html",
    styleUrls:["./FilterDataTable.scss"]
})
export class FilterDataTable implements OnInit {
    @Input() dataSource: any;
    @Input() fields: any[] = [];

    @Output() onFilterChange = new EventEmitter();
    
    showFilter = null;
    search = {};
    result = new MatTableDataSource<Element>();

    constructor(private renderer: Renderer){
    }
    
    ngOnInit(): void {
        this.fields.map(f => {
            this.search[f] = '';
        });

        document.onmousedown = e=>{
            if (!this.isChildOfActiveFilter(e.target)){
                this.showFilter = null;
            }
        };
    }

    changeSearch(field, value) {
        this.search[field] = value;
        this.onFilterChange.emit(this.search);
    }

    isChildOfActiveFilter(e){
        if (e.className === "active-filter")
            return true;
        if (e.parentNode)
            return this.isChildOfActiveFilter(e.parentNode);
        return false;
    }
}