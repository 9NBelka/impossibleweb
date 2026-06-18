'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import styles from './Form.module.scss';
import CustomSelect from '../CustomSelect/CustomSelect';
import { getT } from '@/lib/i18n';

export default function ConForm({ lang }: { lang: string }) {
  const t = getT(lang).contactForm.form;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().min(2, t.errors.nameMin).required(t.errors.nameRequired),
    email: Yup.string().email(t.errors.emailInvalid).required(t.errors.emailRequired),
    phone: Yup.string()
      .matches(/^(\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, t.errors.phoneInvalid)
      .required(t.errors.phoneRequired),
    projectType: Yup.string().required(t.errors.projectTypeRequired),
    budget: Yup.string().required(t.errors.budgetRequired),
    details: Yup.string().max(1000, t.errors.detailsMax),
  });

  const handleSubmit = async (
    values: {
      name: string;
      email: string;
      phone: string;
      projectType: string;
      budget: string;
      details: string;
    },
    { resetForm }: { resetForm: () => void },
  ) => {
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    const message = `
🔔 Новая заявка!

👤 Имя: ${values.name}
📧 Email: ${values.email}
📱 Телефон: ${values.phone}
📂 Тип проекта: ${values.projectType}
💰 Бюджет: ${values.budget}
💬 Детали:
${values.details || 'Не указано'}
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: t.success });
        resetForm();
        setSelectedOption('');
        setSelectedBudget('');
      } else {
        throw new Error('Sending error');
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: t.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelect = (value: string, setFieldValue: (field: string, value: string) => void) => {
    setSelectedOption(value);
    setFieldValue('projectType', value);
    setIsOpen(false);
  };

  const handleBudgetSelect = (
    value: string,
    setFieldValue: (field: string, value: string) => void,
  ) => {
    setSelectedBudget(value);
    setFieldValue('budget', value);
    setIsBudgetOpen(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', projectType: '', budget: '', details: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isValid, setFieldValue }) => (
        <Form className={styles.form}>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>{t.nameLabel}</label>
              <Field
                name='name'
                type='text'
                className={styles.input}
                placeholder={t.namePlaceholder}
              />
              <ErrorMessage name='name' component='div' className={styles.error} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>{t.emailLabel}</label>
              <Field
                name='email'
                type='email'
                className={styles.input}
                placeholder={t.emailPlaceholder}
              />
              <ErrorMessage name='email' component='div' className={styles.error} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t.phoneLabel}</label>
            <Field
              name='phone'
              type='tel'
              className={styles.input}
              placeholder={t.phonePlaceholder}
            />
            <ErrorMessage name='phone' component='div' className={styles.error} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t.projectTypeLabel}</label>
            <CustomSelect
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              selectedOption={selectedOption}
              setFieldValue={setFieldValue}
              handleSelect={handleSelect}
              options={t.options}
              placeholder={t.projectTypePlaceholder}
            />
            <ErrorMessage name='projectType' component='div' className={styles.error} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t.budgetLabel}</label>
            <CustomSelect
              isOpen={isBudgetOpen}
              setIsOpen={setIsBudgetOpen}
              selectedOption={selectedBudget}
              setFieldValue={setFieldValue}
              handleSelect={handleBudgetSelect}
              options={t.budgetOptions}
              placeholder={t.budgetPlaceholder}
            />
            <ErrorMessage name='budget' component='div' className={styles.error} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>{t.detailsLabel}</label>
            <Field
              name='details'
              as='textarea'
              rows={4}
              className={styles.textarea}
              placeholder={t.detailsPlaceholder}
            />
            <ErrorMessage name='details' component='div' className={styles.error} />
          </div>

          <button type='submit' disabled={isSubmitting || !isValid} className={styles.submitButton}>
            {isSubmitting ? t.submitting : t.submit}
          </button>

          {status.message && (
            <div
              className={`${styles.submitMessage} ${status.type === 'success' ? styles.success : styles.errorMessage}`}>
              {status.message}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
