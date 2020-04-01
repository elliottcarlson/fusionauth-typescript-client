
export enum OAuthErrorType {
  invalid_request,
  invalid_client,
  invalid_grant,
  invalid_token,
  unauthorized_client,
  invalid_scope,
  server_error,
  unsupported_grant_type,
  unsupported_response_type,
  change_password_required,
  two_factor_required,
  authorization_pending,
  expired_token
}

export default OAuthErrorType;
