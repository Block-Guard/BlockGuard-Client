---
name: Custom issue template
about: Describe this issue template's purpose here.
title: ''
labels: ''
assignees: ''

---

name: "✨ Feature"
description: "새로운 기능 추가"
labels: ["feature"]
body:
  - type: textarea
    attributes:
      label: 📄 설명
      placeholder: 자세히 적을수록 좋습니다!
    validations:
      required: true
  - type: textarea
    attributes:
      label: ✅ 작업할 내용
      placeholder: 최대한 세분화 해서 적어주세요!
    validations:
      required: true
  - type: textarea
    attributes:
      label: 🙋🏻 참고 자료
      description: 참고 자료가 있다면 작성해 주세요.
