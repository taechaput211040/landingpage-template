import Vue from "vue";
import Vuex from "vuex";
export default function() {
  const Store = new Vuex.Store({
    state: {
      itemrender:
        JSON.parse(`${localStorage.getItem("itemrender")}`) || undefined
    },
    actions: {
      async getData(context) {
        return new Promise(async (resolve, reject) => {
          let response = await this.$axios.get("/get.json");
          if (response.status == 200) {
            localStorage.setItem(
              "itemrender",
              `${JSON.stringify(response.data)}`
            );
            context.commit("setitemrender", response.data);
            resolve(response.data);
          } else {
            reject();
          }
        });
      }
    },
    mutations: {
      setitemrender(state, data) {
        state.itemrender = data;
      }
    }
  });
  return Store;
}

Vue.use(Vuex);
