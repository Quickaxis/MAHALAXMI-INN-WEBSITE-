const fs = require('fs');

const indexHtmlPath = 'index.html';
let content = fs.readFileSync(indexHtmlPath, 'utf8');

const newCss = `        /* Reviews */
        .reviews-stage {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 0 40px;
            max-height: 640px;
            overflow: hidden;
            mask-image: linear-gradient(to bottom,
                transparent 0%,
                black 12%,
                black 88%,
                transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom,
                transparent 0%,
                black 12%,
                black 88%,
                transparent 100%);
        }

        @media (max-width: 768px) {
            .reviews-stage {
                grid-template-columns: 1fr;
                max-height: 500px;
                padding: 0 20px;
            }

            .reviews-col:nth-child(2),
            .reviews-col:nth-child(3) {
                display: none;
            }
        }

        .reviews-col {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        /* Duplicate cards inside each column for seamless loop */
        .col-up {
            animation: scrollUp 28s linear infinite;
        }

        .col-down {
            animation: scrollDown 32s linear infinite;
        }

        .col-up:nth-child(3) {
            animation-duration: 24s;
        }

        @keyframes scrollUp {
            0% {
                transform: translateY(0);
            }

            100% {
                transform: translateY(-50%);
            }
        }

        @keyframes scrollDown {
            0% {
                transform: translateY(-50%);
            }

            100% {
                transform: translateY(0);
            }
        }

        .reviews-stage:hover .reviews-col {
            animation-play-state: paused;
        }

        .review-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 24px;
            flex-shrink: 0;
            border-left: 3px solid var(--gold);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .review-card:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 32px rgba(201, 149, 42, 0.15);
        }

        .review-stars {
            display: flex;
            gap: 2px;
            margin-bottom: 10px;
        }

        .review-quote {
            font-family: 'Cormorant Garamond', serif;
            font-style: italic;
            font-size: 17px;
            line-height: 1.6;
            color: var(--text);
            margin-bottom: 14px;
        }

        .review-author {
            font-family: 'Inter', sans-serif;
            font-size: 13px;
            font-weight: 600;
            color: var(--text);
        }

        .review-meta {
            font-size: 12px;
            color: var(--muted);
            margin-top: 2px;
        }

        .review-source {
            display: inline-block;
            margin-top: 8px;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            color: var(--gold);
            background: rgba(201, 149, 42, 0.1);
            padding: 3px 10px;
            border-radius: 50px;
        }`;

// Replace CSS
content = content.replace(/\/\* Reviews \*\/[\s\S]*?(?=\s*\/\* Restaurant \*\/)/, newCss + "\n\n");

const genReviewsHtml = fs.readFileSync('gen_reviews.txt', 'utf8');

const newHtml = `    <section id="reviews" style="padding:80px 0; background:var(--surface-2); overflow:hidden;">
        <div style="text-align:center; margin-bottom:48px; padding:0 24px;">
            <span class="pill-label">GUEST REVIEWS</span>
            <h2 style="font-family:'Cormorant Garamond',serif; font-size:42px; margin-top:8px;">What Our Guests Say</h2>
            <p style="color:var(--muted); margin-top:8px; font-size:15px;">Real experiences from real guests — verified on OYO</p>
            <!-- Rating summary -->
            <div style="display:inline-flex; align-items:center; gap:12px; margin-top:16px; background:var(--surface); border:1px solid var(--border); border-radius:50px; padding:10px 24px;">
                <span style="font-family:'Cormorant Garamond',serif; font-size:32px; color:var(--gold); font-weight:700;">3.6</span>
                <div>
                    <!-- 5 star SVGs in gold -->
                    <div style="display:flex; gap:2px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9952A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9952A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9952A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9952A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9952A" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                    <p style="font-size:12px; color:var(--muted); margin-top:2px;">Based on 15+ reviews · OYO</p>
                </div>
            </div>
        </div>

        <!-- 3-column infinite scroll -->
        <div class="reviews-stage">
${genReviewsHtml}
        </div>
    </section>`;

// Replace HTML
content = content.replace(/<section id="reviews">[\s\S]*?<\/section>/, newHtml);

fs.writeFileSync(indexHtmlPath, content, 'utf8');
