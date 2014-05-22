jQuery ->
  validate_url = 'uploads/validate'

  $('#new_upload, [id^=edit_upload_]').validate(
#    debug: true
    rules:
      'upload[name]':
        required: true
        remote:
          url: validate_url
          type: 'post'
      'upload[email]':
        required: true
        remote:
          url: validate_url
          type: 'post'
      'upload[massage]':
        required: true
        remote:
          url: validate_url
          type: 'post'
  )

