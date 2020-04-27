<template>
  <div class="wrapper">
    <div class="container py-10">
      <div class="d-flex justify-content-center">
        <form>
          <h6 class="navbar-brand">Melissia Games</h6>
          <h1>Forgot Password</h1>
          <div class="alert alert-danger text-dark my-4">
            This is only a simulation.
          </div>
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text">
                <font-awesome-icon icon="user" />
              </span>
            </div>
            <input
              type="text"
              name
              class="form-control input_user"
              value
              placeholder="Your email"
            />
          </div>

          <div class="d-flex justify-content-center mt-3">
            <button
              type="button"
              class="btn border btn-block"
              style="background-color: #232323 !important;color: #fff !important;"
            >
              Send mail
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
button.btn {
  color: #fff !important;
}
</style>
