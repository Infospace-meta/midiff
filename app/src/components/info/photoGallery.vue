<template>
  <div class="mx-auto max-w-7xl">
    <ul class="gallery flex flex-wrap justify-center items-center gap-5">
      <li v-for="(photo, index) in photos" :key="photo.id">
        <img
          :src="photo.image"
          :alt="photo.title"
          class="h-64 object-cover cursor-pointer"
          @click="openModal(index)"
        />
      </li>
    </ul>
    <Modal
      :showModal="showModal"
      :photos="photos"
      :selectedIndex="selectedIndex"
      @closeModal="closeModal"
    />
  </div>
</template>

<script setup>
import Modal from "./photoModal.vue"; // Adjust the path accordingly
import { ref } from "vue";

const showModal = ref(false);
const selectedIndex = ref(null);

const openModal = (index) => {
  selectedIndex.value = index;
  showModal.value = true;
};

const closeModal = () => {
  selectedIndex.value = null;
  showModal.value = false;
};

const photos = ref([
  {
    id: 1,
    title: 1,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990110/Midiff/graduation23/1_upejff.jpg",
  },
  {
    id: 2,
    title: 2,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990111/Midiff/graduation23/2_zgu6st.jpg",
  },
  {
    id: 3,
    title: 3,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990111/Midiff/graduation23/3_ifqp5b.jpg",
  },
  {
    id: 4,
    title: 4,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990112/Midiff/graduation23/4_e7a3by.jpg",
  },
  {
    id: 5,
    title: 5,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990114/Midiff/graduation23/5_eitwih.jpg",
  },
  {
    id: 6,
    title: 6,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990115/Midiff/graduation23/6_r7ygot.jpg",
  },
  {
    id: 7,
    title: 7,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990115/Midiff/graduation23/7_fkc86k.jpg",
  },
  {
    id: 8,
    title: 8,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990091/Midiff/graduation23/8_wkcejf.jpg",
  },
  {
    id: 9,
    title: 9,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990092/Midiff/graduation23/9_j547rm.jpg",
  },
  {
    id: 10,
    title: 10,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990092/Midiff/graduation23/10_es21za.jpg",
  },
  {
    id: 11,
    title: 11,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990094/Midiff/graduation23/11_tiufvh.jpg",
  },
  {
    id: 12,
    title: 12,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990094/Midiff/graduation23/12_hligaj.jpg",
  },
  {
    id: 13,
    title: 13,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990095/Midiff/graduation23/13_egvmmc.jpg",
  },
  {
    id: 14,
    title: 14,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990096/Midiff/graduation23/14_y8kpb9.jpg",
  },
  {
    id: 15,
    title: 15,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990097/Midiff/graduation23/15_hgtjcz.jpg",
  },
  {
    id: 16,
    title: 16,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990098/Midiff/graduation23/16_iigbpn.jpg",
  },
  {
    id: 17,
    title: 17,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990098/Midiff/graduation23/17_hsyxfh.jpg",
  },
  {
    id: 18,
    title: 18,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990099/Midiff/graduation23/18_sdpfwj.jpg",
  },
  {
    id: 19,
    title: 19,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990100/Midiff/graduation23/19_fi42zm.jpg",
  },
  {
    id: 20,
    title: 20,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990102/Midiff/graduation23/20_n9dzkm.jpg",
  },
  {
    id: 21,
    title: 21,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990102/Midiff/graduation23/21_n2ysrs.jpg",
  },
  {
    id: 22,
    title: 22,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990103/Midiff/graduation23/22_vp1wom.jpg",
  },
  {
    id: 23,
    title: 23,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990103/Midiff/graduation23/23_gim9wj.jpg",
  },
  {
    id: 24,
    title: 24,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990105/Midiff/graduation23/24_iinfkr.jpg",
  },
  {
    id: 25,
    title: 25,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990106/Midiff/graduation23/25_daue6l.jpg",
  },
  {
    id: 26,
    title: 26,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990106/Midiff/graduation23/26_zk7bkr.jpg",
  },
  {
    id: 27,
    title: 27,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990107/Midiff/graduation23/27_h8qhgj.jpg",
  },
  {
    id: 28,
    title: 28,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990108/Midiff/graduation23/28_pfxdoj.jpg",
  },
  {
    id: 29,
    title: 29,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990109/Midiff/graduation23/29_gaqhqw.jpg",
  },
  {
    id: 30,
    title: 30,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990116/Midiff/graduation23/30_zeunaq.jpg",
  },
  {
    id: 31,
    title: 31,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990070/Midiff/graduation23/31_zvwq3o.jpg",
  },
  {
    id: 32,
    title: 32,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990072/Midiff/graduation23/32_sno5kd.jpg",
  },
  {
    id: 33,
    title: 33,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990073/Midiff/graduation23/33_amzss6.jpg",
  },
  {
    id: 34,
    title: 34,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990073/Midiff/graduation23/34_ctb9od.jpg",
  },
  {
    id: 35,
    title: 35,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990074/Midiff/graduation23/35_h1h4nl.jpg",
  },
  {
    id: 36,
    title: 36,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990074/Midiff/graduation23/36_acpawx.jpg",
  },
  {
    id: 37,
    title: 37,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990075/Midiff/graduation23/37_zneqhw.jpg",
  },
  {
    id: 38,
    title: 38,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990075/Midiff/graduation23/38_hce2co.jpg",
  },
  {
    id: 39,
    title: 39,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990076/Midiff/graduation23/39_nk4fe6.jpg",
  },
  {
    id: 40,
    title: 40,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990077/Midiff/graduation23/40_lyyp9g.jpg",
  },
  {
    id: 41,
    title: 41,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990077/Midiff/graduation23/41_grdmzy.jpg",
  },
  {
    id: 42,
    title: 42,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990078/Midiff/graduation23/42_rdrgzy.jpg",
  },
  {
    id: 43,
    title: 43,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990079/Midiff/graduation23/43_sqitcl.jpg",
  },
  {
    id: 44,
    title: 44,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990079/Midiff/graduation23/44_mjjcpe.jpg",
  },
  {
    id: 45,
    title: 45,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990080/Midiff/graduation23/45_s9sv7d.jpg",
  },
  {
    id: 46,
    title: 46,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990081/Midiff/graduation23/46_ersz8e.jpg",
  },
  {
    id: 47,
    title: 47,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990081/Midiff/graduation23/47_an7j7y.jpg",
  },
  {
    id: 48,
    title: 48,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990082/Midiff/graduation23/48_pkq9oa.jpg",
  },
  {
    id: 49,
    title: 49,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990083/Midiff/graduation23/49_rxr16h.jpg",
  },
  {
    id: 50,
    title: 50,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990084/Midiff/graduation23/50_ypzhql.jpg",
  },
  {
    id: 51,
    title: 51,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990085/Midiff/graduation23/51_oyab3v.jpg",
  },
  {
    id: 52,
    title: 52,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990085/Midiff/graduation23/52_n3h8pd.jpg",
  },
  {
    id: 53,
    title: 53,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990086/Midiff/graduation23/53_ar3edn.jpg",
  },
  {
    id: 54,
    title: 54,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990087/Midiff/graduation23/54_gvlcoy.jpg",
  },
  {
    id: 55,
    title: 55,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990088/Midiff/graduation23/55_ihadq2.jpg",
  },
  {
    id: 56,
    title: 56,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990089/Midiff/graduation23/56_ukzuai.jpg",
  },
  {
    id: 57,
    title: 57,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990089/Midiff/graduation23/57_xi40cy.jpg",
  },
]);
</script>
