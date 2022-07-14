<script>
import ListSecond from "./ListSecond.svelte";

    export let isActive = false;
    export let isFirst = false;
    export let isHover = false;
    export let isSelectable = false;
    export let getOptionLabel = undefined;
    export let item = undefined;
    export let filterText = '';
    export let list = undefined;

    export let secondListOpen = false;

    let lastType = '';
    let isHoverSecondList = false
    let thisItem;
    let itemClasses = '';

    $: {
        const classes = [];
        if (isActive) {
            classes.push('active');
        }
        if (isFirst) {
            classes.push('first');
        }
        if (isHover) {
            classes.push('hover');
        }
        if (item.isGroupHeader) {
            classes.push('groupHeader');
        }
        if (item.isGroupItem) {
            classes.push('groupItem');
        }
        if (!isSelectable) {
            classes.push('notSelectable');
        }
        itemClasses = classes.join(' ');
    }

    
    function handleHover(e) {
        if(e.type === lastType) return
        secondListOpen = !secondListOpen;
        
        lastType = e.type
    }

    
    function handleHoverSecondList(e) {
        isHoverSecondList = !isHoverSecondList;
    }

    function handleLeaveSecondList(e) {
        isHoverSecondList = !isHoverSecondList;
        //secondListOpen = false;
    }

    
    
    
</script>

<style>
    .item {
        cursor: default;
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--itemPadding, 0 20px);
        color: var(--itemColor, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .groupHeader {
        text-transform: var(--groupTitleTextTransform, uppercase);
    }

    .groupItem {
        padding-left: var(--groupItemPaddingLeft, 40px);
    }

    .item:active {
        background: var(--itemActiveBackground, #b9daff);
    }

    .item.active {
        background: var(--itemIsActiveBG, #007aff);
        color: var(--itemIsActiveColor, #fff);
    }

   .item.notSelectable {
        color: var(--itemIsNotSelectableColor, #999);
    }


    .item.hover:not(.active) {
        background: var(--itemHoverBG, #e7f2ff);
        color: var(--itemHoverColor, inherit);
    }
    

</style>

<div class="item {itemClasses}" 
    on:mouseover={(e)=>{handleHover(e)}}
    on:mouseleave={(e)=>{handleHover(e)}}
    on:focus={(e)=>{handleHover(e)}}
    bind:this = {thisItem}
    >
    {@html getOptionLabel(item, filterText)}
    {#if secondListOpen}
    <svelte:component
        on:mouseover={(e)=>{handleHoverSecondList(e)}}
        on:mouseleave={(e)=>{handleHoverSecondList(e)}}
        on:focus={(e)=>{handleHoverSecondList(e)}}
        parent={thisItem}
        this={ListSecond}
        items={[0, 1, 2, 3, 4]}
    />
    {/if}

</div>

