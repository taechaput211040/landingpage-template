import Vue from "vue";
import Vuex from "vuex";
export default function() {
  const Store = new Vuex.Store({
    state: {
      itemrender:
        JSON.parse(`${localStorage.getItem("itemrender")}`) || undefined,
      siteRender:
        JSON.parse(`${localStorage.getItem("siteRender")}`) || undefined
    },
    actions: {
      async getData(context) {
        return new Promise(async (resolve, reject) => {
          // let response = await this.$axios.get("example.json");
          let response = await this.$axios.get(
            "https://admin-static-api-ehhif4jpyq-as.a.run.app/api/Static/4193b25ca7ceee6b8d0a7e4d38194f83"
          );
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
      },
      setSiteDetial(state, data) {
        state.siteRender = data;
      }
    }
  });
  return Store;
}

Vue.use(Vuex);
