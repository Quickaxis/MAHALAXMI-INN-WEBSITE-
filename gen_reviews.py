stars_svg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="#C9952A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'

reviews = [
    (5, '\"Very clean rooms and the staff was extremely welcoming. Felt like home from the moment I arrived. Will definitely return on my next trip to Dibrugarh.\"', 'Dipanjali Bora', 'April 2025', 'OYO'),
    (5, '\"Breakfast was delicious and home cooked. The owner personally came and checked on us. Rare hospitality these days.\"', 'Bikky Sonar', 'April 2025', 'OYO'),
    (4, '\"Good value for money. AC was working perfectly and the bed was comfortable. Location is convenient for the bypass road.\"', 'Ranjit Gogoi', 'March 2025', 'OYO'),
    (5, '\"Everything good. Good staff. Room was neat and tidy. Would recommend to anyone visiting Dibrugarh.\"', 'Vijay Kumar', 'March 2025', 'OYO'),
    (4, '\"Stayed for 3 nights for a business trip. The front desk was available every time I needed help. Power backup ensured no interruptions.\"', 'Pranjal Saikia', 'February 2025', 'OYO'),
    (5, '\"The 2BHK homestay unit was spacious and perfect for our family of four. Kids loved the food. Will book again.\"', 'Mridula Hazarika', 'January 2025', 'OYO'),
    (4, '\"Comfortable stay at a very fair price. The Deluxe AC room was well maintained and the geyser worked great in the cold morning.\"', 'Nayan Dutta', 'December 2024', 'OYO'),
    (5, '\"Superb hospitality. The staff went out of their way to make us feel comfortable. The restaurant food especially the dal and rice was outstanding.\"', 'Ankita Baruah', 'January 2025', 'OYO'),
    (4, '\"Clean, safe and quiet location. Good for solo travellers. WiFi was fast and the room was well lit. Satisfied with the stay.\"', 'Subham Kalita', 'November 2024', 'OYO'),
    (5, '\"Checked in late at night and the staff was still awake and very helpful. True 24 hour service. Rooms were spotless.\"', 'Garima Phukan', 'February 2025', 'OYO'),
    (5, '\"The Grand Suite was worth every rupee. Spacious, clean, great AC, and the best sleep I have had in any hotel in Assam.\"', 'Hemanta Rajbongshi', 'March 2025', 'OYO'),
    (4, '\"Decent hotel near the bypass. Helpful management. Breakfast was included and very filling. Good choice for budget travellers.\"', 'Pallabi Nath', 'October 2024', 'OYO'),
    (5, '\"Came with my parents for a family function. The homestay unit was perfect with separate rooms and a kitchen. Felt like our own house.\"', 'Rituraj Bordoloi', 'December 2024', 'OYO'),
    (4, '\"Good location and friendly staff. The room was clean and AC worked well. Would suggest adding some local Assamese decor for more charm.\"', 'Barnali Choudhury', 'January 2025', 'OYO'),
    (5, '\"One of the best budget stays in Dibrugarh. Honest pricing, genuine hospitality, and tasty food. The owner is very courteous and attentive.\"', 'Deepak Boruah', 'February 2025', 'OYO')
]

def make_card(stars, quote, name, date, source):
    return f'''                <div class="review-card">
                    <div class="review-stars">
                        {''.join([stars_svg]*stars)}
                    </div>
                    <div class="review-quote">{quote}</div>
                    <div class="review-author">{name}</div>
                    <div class="review-meta">{date}</div>
                    <span class="review-source">Verified on {source}</span>
                </div>'''

html = ""
for col_idx in range(3):
    direction = "up" if col_idx % 2 == 0 else "down"
    html += f'            <div class="reviews-col col-{direction}">\n'
    cards = []
    for i in range(5):
        idx = col_idx * 5 + i
        cards.append(make_card(*reviews[idx]))
    # Duplicate inside same col
    cards.extend(cards)
    html += '\n'.join(cards)
    html += '\n            </div>\n'

with open("gen_reviews.txt", "w", encoding="utf-8") as f:
    f.write(html)
