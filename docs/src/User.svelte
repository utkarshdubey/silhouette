<script>
    export let data;
    import { generateAvatar } from 'silhouettejs'
    let bgImage = generateAvatar(data.name);
</script>

<div style="padding: 10px;">
    <div class="card">
        <div class="card-header">
            <div class="card-header__avatar" style="background-image: url('{bgImage}')"></div><a href="mailto:"
                class="card-header__follow">{data.email}</a>
        </div>
        <div class="card-content">
            <div class="card-content__username">{data.name}</div>
            <div class="card-content__bio">{data.username}</div>
        </div>
        <div class="card-footer">
            {data.company.catchPhrase}
        </div>
    </div>
</div>

<style>
.card {
  background: #FFFFFF;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  overflow: hidden;
}
.card-header {
  position: relative;
  background: #303841;
  height: 200px;
  text-align: center;
  overflow: hidden;
}
.card-header__avatar {
  background-position: center 30%;
  background-size: 100%;
  height: 100%;
  width: 100%;
}
.card-header__follow {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 6px 10px;
  color: #333333;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;
}
.card-content {
  text-align: center;
  padding: 30px 20px;
}
.card-content__username {
  margin: 0 0 10px;
  color: #333333;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.card-content__bio {
  color: #666666;
  font-size: 12px;
}
.card-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background: #F3F3F3;
  padding: 15px 40px;
  color: #333333;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

</style>