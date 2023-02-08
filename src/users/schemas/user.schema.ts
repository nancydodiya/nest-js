import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
class UserSchema{
    @Prop({
        require: true
    })
    name: string;
    @Prop({
        required: true
    })
    email:string
}
export  const userSchema = SchemaFactory.createForClass(UserSchema);