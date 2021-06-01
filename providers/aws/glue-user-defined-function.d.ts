import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueUserDefinedFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#catalog_id GlueUserDefinedFunction#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#class_name GlueUserDefinedFunction#class_name}.
     */
    readonly className: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#database_name GlueUserDefinedFunction#database_name}.
     */
    readonly databaseName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#name GlueUserDefinedFunction#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#owner_name GlueUserDefinedFunction#owner_name}.
     */
    readonly ownerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#owner_type GlueUserDefinedFunction#owner_type}.
     */
    readonly ownerType: string;
    /**
     * resource_uris block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#resource_uris GlueUserDefinedFunction#resource_uris}
     */
    readonly resourceUris?: GlueUserDefinedFunctionResourceUris[];
}
export interface GlueUserDefinedFunctionResourceUris {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#resource_type GlueUserDefinedFunction#resource_type}.
     */
    readonly resourceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html#uri GlueUserDefinedFunction#uri}.
     */
    readonly uri: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html aws_glue_user_defined_function}.
 */
export declare class GlueUserDefinedFunction extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html aws_glue_user_defined_function} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueUserDefinedFunctionConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _className;
    get className(): string;
    set className(value: string);
    get classNameInput(): string;
    get createTime(): string;
    private _databaseName;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ownerName;
    get ownerName(): string;
    set ownerName(value: string);
    get ownerNameInput(): string;
    private _ownerType;
    get ownerType(): string;
    set ownerType(value: string);
    get ownerTypeInput(): string;
    private _resourceUris?;
    get resourceUris(): GlueUserDefinedFunctionResourceUris[];
    set resourceUris(value: GlueUserDefinedFunctionResourceUris[]);
    resetResourceUris(): void;
    get resourceUrisInput(): GlueUserDefinedFunctionResourceUris[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
