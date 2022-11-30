import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import routes from "./routes";

const pinia = createPinia();

pinia.use((context) => {
  const storeId = context.store.$id;

  const serilizer = {
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  };

  const fromStorage = serilizer.deserialize(window.localStorage.getItem(storeId));

  if (fromStorage) {
    context.store.$patch(fromStorage);
  }

  // listen for changes and update locastroage
  context.store.$subscribe((mutation, state) => {
    window.localStorage.setItem(storeId, serilizer.serialize(state));
  });
});

const app = createApp(App);
app.use(pinia);
app.use(routes);
app.mount("#app");
