export const pageview = (url, title) => {
  try {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_location: url,
      page_title: title,
    })
  } catch (err) {
    console.error('Error in analytics: pageview;', err)
  }
}

export const event = ({ action, category, label, value, ...data }) => {
  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
      ...data,
    })
  } catch (err) {
    console.error('Error in analytics: event;', err)
  }
}
