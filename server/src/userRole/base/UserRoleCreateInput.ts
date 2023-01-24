/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoleCreateNestedManyWithoutUserRolesInput } from "./RoleCreateNestedManyWithoutUserRolesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutUserRolesInput } from "./UserCreateNestedManyWithoutUserRolesInput";

@InputType()
class UserRoleCreateInput {
  @ApiProperty({
    required: false,
    type: () => RoleCreateNestedManyWithoutUserRolesInput,
  })
  @ValidateNested()
  @Type(() => RoleCreateNestedManyWithoutUserRolesInput)
  @IsOptional()
  @Field(() => RoleCreateNestedManyWithoutUserRolesInput, {
    nullable: true,
  })
  role?: RoleCreateNestedManyWithoutUserRolesInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutUserRolesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutUserRolesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutUserRolesInput, {
    nullable: true,
  })
  user?: UserCreateNestedManyWithoutUserRolesInput;
}

export { UserRoleCreateInput };
