<template>
<div class="container">
        <div class="row">
            <ul class="list-group">
                <a href="#" class="list-group-item active">말하기전에 생각했나요 </a>
                <a href="#" class="list-group-item ">term project</a>
                <a href="#" class="list-group-item "></a>
                <a href="#" class="list-group-item "></a>
                <a href="#" class="list-group-item "></a>
            </ul>
        </div>
        <div class="row">
            시연영상
            <hr>
            <div class="embed-responsive embed-responsive-16by9">
                <video src="video/intro.avi" controls width="200" class="embed-responsive-item"></video>
            </div>
        </div>
        <div class="row">
            <p><br>주요 코드<br></p>
            <pre class="pre-scrollable">
                //욕 필터링함수
                void filteringYork () {
                    if(once){
                        testHelper = new MySQLiteOpenHelper(this);
                        db = testHelper.getWritableDatabase(); //DB연결?
            
                        Cursor cursor = db.rawQuery("SELECT count(*) FROM york;", null); //욕테이블 갯수
                        cursor.moveToFirst();
                        int count = Integer.parseInt(cursor.getString(cursor.getColumnIndex("count(*)")));
                        york = new String[count]; //갯수만큼 할당
                        mal = new String[count];
                        cursor = db.rawQuery("SELECT * FROM york;", null);
            
                        int index=0;
                        if (cursor.moveToFirst()) {
                            do {
                                york[index] = cursor.getString(cursor.getColumnIndex("plain"));
                                mal[index++] = cursor.getString(cursor.getColumnIndex("emoticon"));
                            } while (cursor.moveToNext());
                        }
                        cursor = db.rawQuery("SELECT * FROM settings;", null);
                        String name[] = { "", "", "", "", "" },
                                user_selected[] = { "", "", "","", "" };
            
            </pre>
        </div>
        <div class="container">
            <hr>
            <form action="" class="form-horisontal">
                <div class="form-group">
                    <label for="">댓글:</label>
                    <textarea class="form-control" rows="5" id="commentContent" name="commentContent"></textarea>
                    <br>
                    <button type="submit" class="btn pull-right">등록</button>
                </div>
            </form>
            <hr>
        </div>
        
    </div>

</template>

<script>

</script>

<style>

</style>
 

