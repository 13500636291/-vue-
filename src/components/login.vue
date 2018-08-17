<template>
  <div class="login">
    <el-form ref="myform" :model="form" class="container" :rules="rules">
        <img src="../assets/avatar.jpg" class="avatar">
      <el-form-item prop="username">
        <el-input v-model="form.username" prefix-icon="el-icon-phone-outline" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" prefix-icon="el-icon-view" placeholder="请输入密码"></el-input>        
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :plain="true" class="login-btn" @click="submitForm('myform')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {loginPost} from '@/api'
export default {
  data(){
    return {
      form:{
        username:'',
        password:''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度最少6个密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginPost(this.form).then(res=>{
            if(res.meta.status===200){
              this.$message({
                type:'success',
                message:res.meta.msg
              });
              setTimeout(()=>{
                localStorage.setItem('mytoken',res.data.token)
                this.$store.commit('setUsername',res.data.username)
                this.$router.push({name:'Home'})
              },3000);
            } else if(res.meta.status===400) {
              this.$message({
               type:'error',
               message:res.meta.msg
              });
              this.$refs[formName].resetFields();
            }
          })
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>


