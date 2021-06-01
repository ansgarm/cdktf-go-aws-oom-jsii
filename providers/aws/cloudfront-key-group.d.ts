import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontKeyGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html#comment CloudfrontKeyGroup#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html#items CloudfrontKeyGroup#items}.
     */
    readonly items: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html#name CloudfrontKeyGroup#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html aws_cloudfront_key_group}.
 */
export declare class CloudfrontKeyGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html aws_cloudfront_key_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudfrontKeyGroupConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get etag(): string;
    get id(): string;
    private _items;
    get items(): string[];
    set items(value: string[]);
    get itemsInput(): string[];
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
