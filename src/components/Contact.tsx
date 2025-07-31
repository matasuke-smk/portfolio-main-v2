'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理（実際の実装では適切なバックエンドに送信）
    console.log('Form submitted:', formData)
    alert('お問い合わせありがとうございます！48時間以内にご返信いたします。')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">お気軽にお問い合わせください</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>まずはお話をお聞かせください</h3>
            <p>
              プロジェクトの規模や予算に関わらず、<br />
              どんなご相談でもお気軽にどうぞ。<br />
              初回ご相談は無料で承っております。
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>メール</strong><br />
                  contact@matasuke.dev
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <strong>レスポンス時間</strong><br />
                  平均48時間以内にご返信
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🎯</div>
                <div>
                  <strong>対応エリア</strong><br />
                  全国（リモート対応）
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">お名前 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">メールアドレス *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">会社名・団体名</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="budget">ご予算</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">選択してください</option>
                <option value="~50万円">〜50万円</option>
                <option value="50万円~100万円">50万円〜100万円</option>
                <option value="100万円~200万円">100万円〜200万円</option>
                <option value="200万円~">200万円〜</option>
                <option value="相談したい">相談したい</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">プロジェクトの詳細 *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="どのようなサイトを作りたいか、現在の課題、期待する成果などをお聞かせください"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              お問い合わせを送信
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 6rem 0;
          background: rgba(255, 255, 255, 0.9);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          color: #2c3e50;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .section-subtitle {
          text-align: center;
          color: #7f8c8d;
          font-size: 1.2rem;
          margin-bottom: 4rem;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3 {
          color: #2c3e50;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .contact-info p {
          color: #5a6c7d;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-icon {
          font-size: 1.5rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #ecf0f1;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #3498db;
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 768px) {
          .contact {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}