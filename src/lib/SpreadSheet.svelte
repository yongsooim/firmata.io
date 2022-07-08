<script lang="ts">
    import { Subject } from 'rxjs'    
    import type jspreadsheet from 'jspreadsheet-ce'
    import { onMount } from 'svelte'


    let div: HTMLDivElement
    let jsEl: jspreadsheet.JSpreadsheetElement
    let data: jspreadsheet.CellValue[][] = [
        ['Mazda', 2001, 2000],
        ['Pegeout', 2010, 5000],
        ['Honda Fit', 2009, 3000],
        ['Honda CRV', 2010, 6000],
    ];
    
    onMount( () => {
        jsEl = jspreadsheet(div , {
        data: data,
        columns: [
            { title:'Model', width:300 },
            { title:'Price', width:80 },
            { title:'Model', width:100 }
        ]
        })
    })

    
</script>

<div id='spreadsheet' bind:this = {div}></div>
