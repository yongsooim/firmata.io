<script>
    export let isActive = false;
    export let isFirst = false;
    export let isHover = false;
    export let isSelectable = false;
    export let item = undefined;

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

</script>

<style>
    .itemSecond {
        cursor: pointer;
        height: var(--height, 60px);
        line-height: var(--height, 60px);
        padding: var(--itemPadding, 0 20px);
        color: var(--itemColor, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: black;

    }

    .groupHeader {
        text-transform: var(--groupTitleTextTransform, uppercase);
    }

    .groupItem {
        padding-left: var(--groupItemPaddingLeft, 40px);
    }

    .itemSecond:active {
        background: var(--itemActiveBackground, #b9daff);
    }

    .itemSecond.active {
        background: var(--itemIsActiveBG, #007aff);
        color: var(--itemIsActiveColor, #fff);
    }

   .itemSecond.notSelectable {
        color: var(--itemIsNotSelectableColor, #999);
    }


    .itemSecond.hover:not(.active) {
        background: var(--itemHoverBG, #e7f2ff);
        color: var(--itemHoverColor, inherit);
        color: black;

    }
</style>

<div class="itemSecond {itemClasses}" 
    on:click={()=>{console.log(item)}}>
    {item}
</div>
