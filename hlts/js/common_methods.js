/**
 * Created by Administrator on 2017/12/9.
 * ���÷���JS
 */
/*ͨ��id��ȡ����*/
function getObjectById(id) {
    var obj = document.getElementById(id);
    return obj;
}

/*��ȡ��ַ����*/
function getQueryString1(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = decodeURI(window.location.href).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/*�õ���ǰѡ�����ǵڼ���*/
function query_element_id(element, name) {
    var elements = document.getElementsByName(name);
    for (var i = 0; i < elements.length; i++) {
        if (elements[i] == element) {
            return i;
        }
    }
}