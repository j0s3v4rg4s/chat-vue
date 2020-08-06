<script lang="ts">
import Vue from 'vue';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
export default Vue.extend({
  methods: {
    async createUser(name: string, email: string, password: string, image: string) {
      const userData = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await Promise.all([
        userData.user?.updateProfile({
          displayName: name,
          photoURL: image,
        }),
        firebase
          .database()
          .ref(`user/${userData.user?.uid}`)
          .set({
            uid: userData.user?.uid,
            name,
            avataar: image,
          }),
      ]);
    },
  },
});
</script>
