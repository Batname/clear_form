jQuery ->
  validate_url = 'en/uploads/validate'

  $('#new_upload, [id^=edit_upload_]').validate(
#    debug: true
    rules:
      'upload[name]':
        required: true
        remote:
          url: validate_url
          type: 'post'
      'upload[email]':
        remote:
          url: validate_url
          type: 'post'
      'upload[massage]':
        required: true
        remote:
          url: validate_url
          type: 'post'
  )