<template>
    <div class="op-search" :class="{ 'op-search--show-action': showAction }" :style="{'background':background}">
    <div class="op-search__content" :class="shape ? `op-search__content--${shape}` : ''">
      <div class="op-cell op-search__field">
        <div class="op-field__left-icon">
          <VanIcon name="search" />
        </div>
        <div class="op-cell__value">
          <div class="op-field__body">
            <input
              type="search"
              class="op-field__control"
              :value="modelVal"
              :placeholder="placeholder"
              @click="emits('inputClick')"
              @keypress="onKeypress"
              @input="modelValInput"
            />
            <!-- v-if="!modelVal" -->
            <div v-if="$slots['right-icon']" class="op-field__right-icon">
              <slot name="right-icon"></slot>
            </div>
            <VanIcon @click="onClear" v-else-if="modelVal" name="clear" class="op-field__clear" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showAction" class="op-search__action">
      <slot name="action">
        <div>取消</div>
      </slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
interface IProps {
    modelVal?:string | number
    background?:string,
    placeholder?:string,
    showAction?:boolean,
    shape?:string
}
const props = defineProps<IProps>()

interface IEmits {
  (e:'search',v?:number | string):void
  (e:'cancel'):void
  (e:'clear'):void
  (e:'inputClick'):void
  (e:'update:modelVal',v?:number | string):void
}
const emits = defineEmits<IEmits>()

const onKeypress = (e:KeyboardEvent)=> {
  if(e.keyCode === 13){
    e.preventDefault()
    emits('search',props.modelVal)
  }
}

const modelValInput = (e:Event)=> {
  emits('update:modelVal',(e.target as HTMLInputElement).value)
}
const onClear = ()=> {
  emits('update:modelVal','')
  emits('clear')
}
</script>

<style lang='less'>
:root {
  --op-search-padding: 10px var(--van-padding-sm);
  --op-search-background-color: var(--van-background-color-light);
  --op-search-content-background: var(--van-gray-1);
  --op-search-left-icon-color: var(--van-gray-6);
  --op-search-action-padding: 0 var(--van-padding-xs);
  --op-search-action-text-color: var(--van-text-color);
  --op-search-action-font-size: var(--van-font-size-md);
  --op-search-input-height: 34px;
}

.op-search {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: var(--op-search-padding);
  background: var(--op-search-background-color);

  &--show-action {
    padding-right: 0;
  }

  &__content {
    display: flex;
    flex: 1;
    padding-left: var(--van-padding-sm);
    background: var(--op-search-content-background);
    border-radius: var(--van-border-radius-sm);
    &--round {
      border-radius: var(--van-border-radius-max);
    }
  }

  &__action {
    padding: var(--op-search-action-padding);
    color: var(--op-search-action-text-color);
    font-size: var(--op-search-action-font-size);
    line-height: var(--op-search-input-height);
    cursor: pointer;
    user-select: none;
  }

  &__field {
    flex: 1;
    padding: 5px var(--van-padding-xs) 5px 0;
    background-color: transparent;

    .op-field__left-icon {
      color: var(--op-search-left-icon-color);
      margin-right: var(--van-padding-base);
      .van-icon {
        font-size: var(--van-field-icon-size);
      }
    }
  }
}

.op-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  color: var(--van-cell-text-color);
  font-size: var(--van-cell-font-size);
  line-height: var(--van-cell-line-height);
  &__value {
    flex: 1;
    color: var(--van-cell-text-color);
    vertical-align: middle;
    word-wrap: break-word;
  }
}

.op-field {
  &__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    color: var(--van-field-input-text-color);
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    resize: none;
    user-select: none;
    &::placeholder {
      color: var(--van-field-placeholder-text-color);
    }
  }
  &__body {
    display: flex;
    align-items: center;
  }
  &__right-icon {
    color: var(--van-field-right-icon-color);
    padding: 0 var(--van-padding-xs);
    line-height: inherit;
    flex-shrink: 0;
  }
  &__clear {
    color: var(--van-field-clear-icon-color);
    font-size: var(--van-field-clear-icon-size) !important;
    cursor: pointer;
  }
}
input {
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
}
</style>