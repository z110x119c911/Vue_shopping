<template>
  <div>
    <h2 class="article py-5 text-center">Contact Us</h2>
    <div class="row no-gutters py-3 justify-content-center">
      <form class="needs-validation" novalidate>
        <div class="form-row mx-0 justify-content-center">
          <div class="col-8 mb-3">
            <label for="validationCustom01">姓名</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
            />
            <div class="valid-feedback">確認</div>
            <div class="invalid-feedback">此處不能空白</div>
          </div>
          <div class="col-8 mb-3">
            <label for="validationCustom02">電話</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              required
            />
            <div class="valid-feedback">確認</div>
            <div class="invalid-feedback">此處不能空白</div>
          </div>
          <div class="col-8 mb-3">
            <label for="validationCustom03">信箱</label>
            <input
              type="email"
              class="form-control"
              id="validationCustom02"
              required
            />
            <div class="valid-feedback">已確認</div>
            <div class="invalid-feedback">此處不能空白</div>
          </div>
          <div class="col-8 mb-3">
            <label for="validationTextarea">留言</label>
            <textarea class="form-control" id="validationTextarea" required></textarea>
            <div class="invalid-feedback">此處不能空白</div>
          </div>
        </div>
        <div class="row no-gutters justify-content-center">
          <div class="col-8 text-right">
            <button class="btn btn-primary" type="submit">送出</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>