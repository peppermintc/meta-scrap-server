### Meta Scrap Server

웹 페이지의 메타 데이터를 스크랩하는 서버입니다.

#### Endpoint

```
GET https://meta-scrap-server.onrender.com/meta?key={key}&url={url}
```

#### Query Parameters

- `key`: 서비스 키 (필수)
- `url`: 메타 데이터 스크랩 대상 웹페이지 URL (필수)

#### 응답 형식

서버는 요청한 웹페이지의 메타 데이터를 JSON 형식으로 반환합니다. 예:

```json
{
  "title": "웹페이지 제목",
  "description": "웹페이지 설명",
  "image": "대표 이미지 URL",
  "author": "저자 정보",
  "keywords": ["키워드1", "키워드2"]
  // 기타 메타 데이터 필드...
}
```

#### 예제

```bash
curl -X GET "https://meta-scrap-server.onrender.com/meta?key=your_api_key&url=https://example.com"
```
