import axios from "axios"
const tstdeployiostestAPI = axios.create({
  baseURL: "https://tst-deployiostest--116382.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstdeployiostestAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_javed_list(payload) {
  return tstdeployiostestAPI.get(`/api/v1/javed/`)
}
function api_v1_javed_create(payload) {
  return tstdeployiostestAPI.post(`/api/v1/javed/`, payload)
}
function api_v1_javed_retrieve(payload) {
  return tstdeployiostestAPI.get(`/api/v1/javed/${payload.id}/`)
}
function api_v1_javed_update(payload) {
  return tstdeployiostestAPI.put(`/api/v1/javed/${payload.id}/`, payload)
}
function api_v1_javed_partial_update(payload) {
  return tstdeployiostestAPI.patch(`/api/v1/javed/${payload.id}/`, payload)
}
function api_v1_javed_destroy(payload) {
  return tstdeployiostestAPI.delete(`/api/v1/javed/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tstdeployiostestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tstdeployiostestAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tstdeployiostestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstdeployiostestAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstdeployiostestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstdeployiostestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstdeployiostestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstdeployiostestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tstdeployiostestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstdeployiostestAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return tstdeployiostestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstdeployiostestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstdeployiostestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_javed_list,
  api_v1_javed_create,
  api_v1_javed_retrieve,
  api_v1_javed_update,
  api_v1_javed_partial_update,
  api_v1_javed_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
