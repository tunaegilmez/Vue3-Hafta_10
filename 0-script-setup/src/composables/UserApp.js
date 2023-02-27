import { ref, reactive, watch } from "vue";

export default function () {
  const state = reactive({
    personal: {
      name: "Tuna",
      lname: null,
    },
  });
  //   watch(state.personal, personal => {
  //     console.log(personal.lname);
  //   });
  //   console.log(state.personal.lname);
  watch(
    () => JSON.parse(JSON.stringify(state.personal)),
    (newPersonal, oldPersonal) => {
      console.log(oldPersonal);
      console.log(newPersonal);
    }
  );
  return {
    state,
  };
}
