import { ref, onMounted } from "vue";
export default function () {
  const title = ref("Tuna Eğilmez");
  const counter = ref(0);
  const inc = () => {
    counter.value++;
  };
  const alertMe = info => {
    console.log(info);
  };

  onMounted(() => {
    console.log("MountedEsnasında yapılabilecekler burada...");
  });

  return { title, counter, inc, alertMe };
}
