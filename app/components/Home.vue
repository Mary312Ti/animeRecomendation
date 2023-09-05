<template>
    <Page>
      <ActionBar>
        <NavigationButton icon="res://menu" @tap="openMenu" />
        <Label text="Home" />
        <ActionItem
          v-if="authenticated"
          icon="res://logout"
          @tap="logout"
          ios.position="right"
        />
      </ActionBar>
  
      <GridLayout>
        <Label class="info">
          <FormattedString>
            <Span class="fas" text.decode="&#xf135; " />
            <Span :text="message" />
          </FormattedString>
        </Label>
      </GridLayout>
    </Page>
  </template>

<script>
export default {
  data() {
    return {
      authenticated: false, // Установите значение в true, когда пользователь авторизуется
    };
  },
  computed: {
    message() {
      return this.authenticated
        ? `Hello, ${this.username || 'Stranger'}`
        : 'Hello, Stranger';
    },
  },
  methods: {
    openMenu() {
      // Ваш код для открытия меню
    },
    logout() {
      // Ваш код для выхода из аккаунта
    },
  },
};
</script>


<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
