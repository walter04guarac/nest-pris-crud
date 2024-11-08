import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {
    @ApiProperty()
    name: string;

    @ApiProperty({required: false})
    description?:string;

    @ApiProperty()
    gender: string;

    @ApiProperty({default:true})
    aLiked: boolean;


}
