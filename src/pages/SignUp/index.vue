<template>
  <div class="wrapper">
    <div class="container py-10">
      <div class="d-flex justify-content-center pt-5">
        <form>
          <h6 class="navbar-brand">Melissia Games</h6>
          <h1>Registration</h1>
          <div class="alert alert-danger text-dark my-4">
            This is only a simulation.
          </div>
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text">
                <font-awesome-icon icon="at" />
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
          <div class="input-group mb-2">
            <div class="input-group-append">
              <span class="input-group-text">
                <font-awesome-icon icon="key" />
              </span>
            </div>
            <input
              type="password"
              name
              class="form-control"
              value
              placeholder="password"
            />
          </div>
          <div class="input-group mb-2">
            <div class="input-group-append">
              <span class="input-group-text">
                <font-awesome-icon icon="key" />
              </span>
            </div>
            <input
              type="password"
              name
              class="form-control"
              value
              placeholder="confirmation"
            />
          </div>
          <div class="d-flex justify-content-center mt-3">
            <button
              type="button"
              class="btn border btn-block"
              style="background-color: #232323 !important;color: #fff !important;"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      <div class="mt-4">
        <div class="d-flex justify-content-center links">
          Already have an account?
          <router-link to="/signin" class="ml-2">Sign In</router-link>
        </div>
        <div class="d-flex justify-content-center links">
          <router-link to="/forgot-password" class="font-weight-bold"
            >Forgot your password?</router-link
          >
        </div>
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
