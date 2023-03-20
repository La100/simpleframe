import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
