<template>
<div class="contact-form">
  <div class="head">
    <p class="title">{{ $t('contactForm.title') }}</p>
    <p v-if="statusMessage" class="status" :class="statusClass">{{ statusMessage }}</p>
  </div>
  <form
    name="contact"
    method="post"
    netlify
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact" />
    <div class="fields">
      <input
        type="email"
        class="field"
        id="contact-form-email"
        name="email"
        v-model="form.email"
        :placeholder="$t('contactForm.placeholders.email')"
        required
      >
      <input
        type="text"
        class="field"
        id="contact-form-subject"
        name="subject"
        v-model="form.subject"
        :placeholder="$t('contactForm.placeholders.subject')"
        required
      >
      <textarea
        class="field"
        id="contact-form-msg"
        name="message"
        v-model="form.message"
        :placeholder="$t('contactForm.placeholders.msg')"
        rows="7"
        required
      ></textarea>
    </div>
    <div class="actions">
      <SubmitBtn :disabled="loading" />
    </div>
  </form>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import SubmitBtn from './SubmitBtn.vue'

const { t } = useI18n()

const form = ref({ email: '', subject: '', message: '' })
const loading = ref(false)
const status = ref('')

const handleSubmit = async event => {
  loading.value = true
  status.value = ''

  try {
    const formData = new FormData(event.target)
    const payload = new URLSearchParams(formData).toString()

    const response = await axios.post('/', payload, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })

    if (response.status !== 200)
      throw new Error(response.status)

    status.value = 'success'
    form.value = { email: '', subject: '', message: '' }
  } catch (err) {
    status.value = 'error'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const statusMessage = computed(() => {
  switch (status.value) {
    case 'success':
      return t('contactForm.messages.success')
    case 'error':
      return t('contactForm.messages.somethingWentWrongError')
    default:
      return ''
  }
})

const statusClass = computed(() => ({
  success: status.value === 'success',
  error: status.value === 'error'
}))
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 550px;
  margin-inline: auto;
  padding: var(--spacing-xl) var(--spacing-md);
  border-radius: 3px;
  background-color: var(--contact-form-bg-color);
  color: var(--contact-form-text-color);
}

form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.fields {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.field {
  padding: var(--spacing-sm);
  line-height: 1.5rem;
  border-radius: 3px;
  border: none;
  outline: none;
  font-family: var(--font-stack-sans);
  background-color: var(--contact-form-field-bg-color);
  color: var(--contact-form-field-text-color);
}

textarea {
  resize: vertical;
  min-height: 6rem;
  max-height: 25rem;
}

.actions {
  display: flex;
  justify-content: center;
}

.status {
  margin-block-start: var(--spacing-xs);
  font-size: var(--font-sm);
}

.success { color: var(--success-color); }
.error { color: var(--error-color); }

html.light .contact-form,
html.light .field {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
</style>
