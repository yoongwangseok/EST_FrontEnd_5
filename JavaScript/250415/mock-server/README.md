# Mock Server

json-server를 이용하여 코드를 실행하기 위해서 패키지 설치가 필요합니다. 노드 환경이 설치가 되어 있지 않다면 노드 환경을 설치한 후 패키지 설치를 진행하세요.

```
node -v // node 환경이 설치되어 있는지 확인합니다.
npm i
```

위 명령어를 이용하여 node_modules를 설치한 후 실습을 진행해주세요.

## json-server

json-server를 실행하는 명령어는 다음과 같습니다. 터미널을 이용해서 서버를 실행해주세요.

```
json-server db.json

// 설정
json-server --watch db.json // watch: 변경사항 감지
json-server --port 3000 db.json // port: 포트번호 설정
```
